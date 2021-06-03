describe('Comparadores comunes', () => {
    const user = {
        name: "david",
        lastname: "angarita"
    }
    const user2 = {
        name: "david",
        lastname: "angarita"
    }

    test('igualdad de elementos', () => {
        expect(user).toEqual(user2);
    });

    test('No son exactamente iguales', () => {
        expect(user).not.toEqual(user2);
    });
});