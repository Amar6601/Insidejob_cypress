import LoginPage from "../support/object_model/LoginPage";

describe("Validasi Error Message Login - SauceDemo", () => {
  it("Username kosong menampilkan pesan yang sesuai", () => {
    LoginPage.visit();
    LoginPage.login("", "secret_sauce");
    LoginPage.shouldShowError("Epic sadface: Username is required");
  });

  it("Password kosong menampilkan pesan yang sesuai", () => {
    LoginPage.visit();
    LoginPage.login("standard_user", "");
    LoginPage.shouldShowError("Epic sadface: Password is required");
  });

  it("Username & password salah menampilkan pesan gagal login", () => {
    LoginPage.visit();
    LoginPage.login("standard_user", "salah");
    LoginPage.shouldShowError("Epic sadface: Username and password do not match any user in this service");
  });
});
