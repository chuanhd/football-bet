//"SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract FootballBetFactory {
    mapping(uint => address) public deployedBets;

    function createFootballBet(uint matchId) public {
        FootballBet newBet = new FootballBet(msg.sender);
        deployedBets[matchId] = address(newBet);
    }

    function getDeployedBetForMatch(uint matchId) public view returns (address) {
        return deployedBets[matchId];
    }
}

contract FootballBet {
    enum MatchResult { HOME_WIN, AWAY_WIN, DRAW}

    address public manager;
    uint public homeTeamBetAmount;
    uint public awayTeamBetAmount;
    uint public drawBetAmount;
    address[] private homeTeamWinBettors;
    address[] private awayTeamWinBettors;
    address[] private drawBettors;
    bool public completed;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    constructor(address creator) {
        manager = creator;
    }

    function betForResult(MatchResult result) public payable {
        require(msg.value > 0, "Bet value must be greater than zero");
        if (result == MatchResult.HOME_WIN) {
            homeTeamBetAmount += msg.value;
            homeTeamWinBettors.push(msg.sender);
        } else if (result == MatchResult.AWAY_WIN) {
            awayTeamBetAmount += msg.value;
            homeTeamWinBettors.push(msg.sender);
        } else {
            drawBetAmount += msg.value;
            drawBettors.push(msg.sender);
        }
    }

    function finalizeTheBet(MatchResult result) public restricted {
        uint willSendAmount = 0;
        address[] storage receivers;
        // TODO: Instead of sending same amount of ether to every winner, we need to divide it based on bet amount
        if (result == MatchResult.HOME_WIN) {
            if (homeTeamWinBettors.length > 0) {
                willSendAmount = (awayTeamBetAmount + drawBetAmount) / homeTeamWinBettors.length;
                receivers = homeTeamWinBettors;
            } else {
                refundMoney(awayTeamWinBettors, awayTeamBetAmount / awayTeamWinBettors.length, drawBettors, drawBetAmount / drawBettors.length);
                completed = true;
                return;
            } 
        } else if (result == MatchResult.AWAY_WIN) {
            if (awayTeamWinBettors.length > 0) {
                willSendAmount = (homeTeamBetAmount + drawBetAmount) / awayTeamWinBettors.length;
                receivers = awayTeamWinBettors;
            } else {
                refundMoney(homeTeamWinBettors, homeTeamBetAmount / homeTeamWinBettors.length, drawBettors, drawBetAmount / drawBettors.length);                
                completed = true;
                return;
            }
        } else {
            if (drawBettors.length > 0) {
                willSendAmount = (homeTeamBetAmount + awayTeamBetAmount) / drawBettors.length;
                receivers = drawBettors;
            } else {
                refundMoney(homeTeamWinBettors, homeTeamBetAmount / homeTeamWinBettors.length, awayTeamWinBettors, awayTeamBetAmount / awayTeamWinBettors.length);
                completed = true;
                return;
            }
        }
        sendMoneyToReceivers(receivers, willSendAmount);
        completed = true;
    }

    function sendMoneyToReceivers(address[] storage receivers, uint amount) private {
        for (uint index = 0; index < receivers.length; index++) {
            address receiver = receivers[index];
            (bool sent,) = receiver.call{value: amount}("");
            require(sent, "Failed to send Ether");
        }
    }

    function refundMoney(address[] storage firstReceivers, uint firstAmount, address[] storage secondReceivers, uint secondAmount) private {
        sendMoneyToReceivers(firstReceivers, firstAmount);
        sendMoneyToReceivers(secondReceivers, secondAmount);
    }
}

