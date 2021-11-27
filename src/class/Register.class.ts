class Register {
    name: string;
    surname: string;
    email: string;
    username: string;
    password: string;
    confirmationPassword: string;
    gender: string;
    birthday: Date;
    country: string;
    city: string;

    constructor(
        name: string, surname: string, email: string, 
        username: string, password: string, confirmationPassword: string, 
        gender: string, birthday: Date, country: string,
        city: string
    ) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.username = username;
        this.password = password;
        this.confirmationPassword = confirmationPassword;
        this.gender = gender;
        this.birthday = birthday;
        this.country = country;
        this.city = city;
    }
}

export { Register };