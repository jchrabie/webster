/**
 * Coerce decorator
 */
export function coerce<
  T extends { [key in P]: O } = never,
  P extends string | symbol = string | symbol,
  I = unknown,
  O = unknown
>(coerceFn: (value: I, self: T) => O): PropertyDecorator {
  // @ts-ignore
  return function (target: T, propertyKey: P) {
    const key = Symbol();
    // @ts-ignore
    target[key] = target[propertyKey];
    Object.defineProperty(target, propertyKey, {
      get: function () {
        return this[key];
      },
      set: function (v: I) {
        this[key] = coerceFn.call(this, v, this);
      },
    });
  };
}
