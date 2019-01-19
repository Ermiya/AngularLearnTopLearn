;
{
    var Farshid = {
        name: "farshid",
        family: "saeidi",
        email: "farsia@chmai.ir",
        phone: 123456
    };
}
{
    function RegisterUser(user) {
        console.log(user);
    }
    ;
}
RegisterUser(Farshid);
{
    var UserManager = /** @class */ (function () {
        function UserManager() {
        }
        UserManager.prototype.Register = function (user) {
            return true;
        };
        UserManager.prototype.Login = function (username, password) {
        };
        return UserManager;
    }());
}
