interface IUser {
    name: string;
    family: string;
    email: string;
    phone?: number
};
{
    let Farshid: IUser = {
        name: "farshid",
        family: "saeidi",
        email: "farsia@chmai.ir",
        phone: 123456
    };

{
    function RegisterUser(user: IUser) {
        console.log(user);
    };
}

RegisterUser(Farshid);
}
interface IUserManager {
    Register: (user: IUser) => boolean;
    Login: (username: string, password: string) => void;
}
{
    class UserManager implements IUserManager {
        Register(user: IUser) {
            return true;
        }
        Login(username: string, password: string) {

        }
    }
}