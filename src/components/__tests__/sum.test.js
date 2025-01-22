import sum from "../sum";

test("Sum function should calculate the sum of two numbers", () => {
    const result = sum(5,9);

    //Assertion
    expect(result).toBe(14);
});