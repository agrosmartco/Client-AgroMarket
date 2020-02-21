export class User {

    constructor(

        public firstName: string,
        public lastname: string,
        public email: string,
        public password: string,
        public roles?: [
            string
        ]) {

    }



}