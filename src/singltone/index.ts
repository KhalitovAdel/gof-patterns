/**
 * Playground: https://www.typescriptlang.org/play?#code/MYGwhgzhAEAqCmEAu0DeAod1vQA4CcB7JeYEgE2mTCQEthpaA7ap4RALjkSQG0BdaAF5oAgNyYceIiTLxKwQiyT4ArmUL4AFAEo0AX0k5qdBs1pJdaLFJy0AZtC1IAFrQgA6Zq3aeQ8JgBzV2gAPhEARgAGaD1XIgB3aCZ4JIBRfCJtAHIAWTAAD0ZlMDZ4YSERbOgAamhXdy8Ssr8A4JcdCVscRWVin3KRFKSGiF0u7vq3T28kUt8PXFUIFy1Z+fhOo278eCRVfCZ+ubKJ7ENDdARkJotx6AB6B+gIq55by07H54AmN5vzJ8xN9oABmf5ID73J7QAAsEKhXxhAFYEYDoc8AGxoph3JHPADsOLxwJhAA5iUCQQBOSkYl5ROn4l6vIA
 */
class Test {

    protected static instances: Test[] = [];

    protected constructor() {}

    static getInstance() {
        if (this.instances.length >= 10 ) throw new Error('Max instance === ' + this.instances.length);
        const instance = new this();
        this.instances.push(instance);

        return instance;
    }
}

Test.getInstance(); // 1
Test.getInstance(); // 2
Test.getInstance(); // 3
Test.getInstance(); // 4
Test.getInstance(); // 5
Test.getInstance(); // 6
Test.getInstance(); // 7
Test.getInstance(); // 8
Test.getInstance(); // 9
Test.getInstance(); // 10
Test.getInstance(); // 11 here throw error
