import throwIfNever from ".";
  
test("should be able to identift never typing issues", async () => {
    expect(() => throwIfNever(undefined as never)).not.toThrow();
    expect(() => throwIfNever({} as never)).toThrow("This should never happen!");
});
