import React, { Component } from "react";

export default class Login extends Component 
{
  state = {
    email: "",
    password: "",
    TempEmail:"",
    TempPassword:"",
    TempPassword2:"",
    users:[
        {
        email:"deneme@gmail.com",
        password:"123"
        },
        {
        email:"deneme2@gmail.com",
        password:"1234"
        },
        {
        email:"deneme3@yandex.com",
        password:"12345"
        }
    ]
  };

 
  GirisYap = () => {
    let userArray = this.state.users.filter((x) => x.email === this.state.email);
    if (userArray.length > 0) {
      if (userArray[0].password === this.state.password) {
        return console.log("Giriş Yapıldı.");
      } else {
        return console.log("Şifre, kullanıcı adı ile eşleşmedi.");
      }
    } else {
      return console.log("Kullanıcı adı bulunamadı.");
    }
  };

  SignIn = () => {
    let userArray = this.state.users.filter((x) => x.email === this.state.TempEmail);
    if (userArray.length === 0) 
    {
      console.log("Email başarılı.");
      
        if(this.state.TempPassword === this.state.TempPassword2)
        {
            this.setState({
                users:[...this.state.users, {email:this.state.TempEmail,password:this.state.TempPassword}]
          })
          return console.log("kAYIT BAŞARILI .");
        }
        else
        {
            return console.log("Passwordlar uyumsuz.");
        }
        
    }
    else
    {
        return console.log("Email Başarısız.");
    }
    
  };

  render() {
    return (
      <div>
        <input
          placeholder="Kullanıcı adı"
          value={this.state.email}
          onChange={(event) => this.setState({ email: event.target.value })}
        />
        <br />
        <input
          placeholder="Şifre"
          type="password"
          onChange={(event) => this.setState({ password: event.target.value })}
        />
        <br />
        <button onClick={this.GirisYap}>Giriş</button>
        <br /><br /><br /><br /><br /><br /><br /><br />

        <input
          placeholder="Kullanıcı adı"
          value={this.state.TempEmail}
          onChange={(event) => this.setState({ TempEmail: event.target.value })}
        />
        <br />
        <input
          placeholder="Şifre"
          type="password"
          onChange={(event) => this.setState({ TempPassword: event.target.value })}
        />
        <br />
        <input
          placeholder="Şifre Tekrar"
          type="password"
          onChange={(event) => this.setState({ TempPassword2: event.target.value })}
        />
        <br />
        <button onClick={this.SignIn}>Kayıt Ol</button>
      </div>
    );
  }
}
