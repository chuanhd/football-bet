/* eslint-disable max-classes-per-file */
export type Either<L, A> = Left<L, A> | Right<L, A>;

export class Left<L, A> {
  readonly value: L;

  constructor(value: L) {
    this.value = value;
  }

  // eslint-disable-next-line class-methods-use-this
  isLeft(): this is Left<L, A> {
    return true;
  }

  // eslint-disable-next-line class-methods-use-this
  isRight(): this is Right<L, A> {
    return false;
  }
}

export class Right<L, A> {
  readonly value: A;

  constructor(value: A) {
    this.value = value;
  }

  // eslint-disable-next-line class-methods-use-this
  isLeft(): this is Left<L, A> {
    return false;
  }

  // eslint-disable-next-line class-methods-use-this
  isRight(): this is Right<L, A> {
    return true;
  }
}

export const left = <L, A>(l: L): Either<L, A> => new Left(l);

export const right = <L, A>(a: A): Either<L, A> => new Right<L, A>(a);
