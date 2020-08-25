// tests for Uberschall

const uber = require('../index');
// jest tests WOOOOOOO 🥳
test('properly logs with all params provided', async () => {
    const msgParam = "Hey!"
    const origin = "Test"
    const haveTimestamp = true;
    const testMsg = await uber.logGeneral({
        msg: msgParam,
        origin: origin,
        logTime: haveTimestamp,
    });
    const dateHolder = new Date();
    const dateStr = `${dateHolder.getDate()}/${dateHolder.getMonth() + 1}/${dateHolder.getFullYear()} ${dateHolder.getHours()}:${dateHolder.getMinutes()}`;
    const expectedMessage = `[${dateStr}] | [ FROM: ${origin} ] "${msgParam}"`;
    expect(testMsg).toBe(expectedMessage);
})

test('properly logs with no origin provided', async () => {
    const msgParam = "Hey!"
    const haveTimestamp = true;
    const testMsg = await uber.logGeneral({
        msg: msgParam,
        logTime: haveTimestamp,
    });
    const dateHolder = new Date();
    const dateStr = `${dateHolder.getDate()}/${dateHolder.getMonth() + 1}/${dateHolder.getFullYear()} ${dateHolder.getHours()}:${dateHolder.getMinutes()}`;
    const expectedMessage = `[${dateStr}] | [ FROM: Unknown ] "${msgParam}"`;
    expect(testMsg).toBe(expectedMessage);
});

test('properly logs with timestamp set to false', async () => {
    const msgParam = "Hey!"
    const haveTimestamp = false;
    const testMsg = await uber.logGeneral({
        msg: msgParam,
        logTime: haveTimestamp,
    });
    const dateHolder = new Date();
    const dateStr = `${dateHolder.getDate()}/${dateHolder.getMonth() + 1}/${dateHolder.getFullYear()} ${dateHolder.getHours()}:${dateHolder.getMinutes()}`;
    const expectedMessage = `[] | [ FROM: Unknown ] "${msgParam}"`;
    expect(testMsg).toBe(expectedMessage);
})

test('this one should fail', async () => {
    await expect(uber.logGeneral()).resolves.toMatch('error');
});