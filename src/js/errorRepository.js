class ErrorRepository {
    constructor() {
        this.repozitory = new Map([
            [1, "ошибка первая"],
            [2, "ошибка вторая"],
            [3, "ошибка третья"]
        ]);

    }

    translate(code) {
        if (this.repozitory.has(code)) {
            return this.repozitory.get(code);
        } else return 'Unknown error';

    }

}