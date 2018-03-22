import React, {Component} from 'react';
import LoginForm from './LoginForm';

class Login extends Component {

  render() {
    return (
      <div className="page-splitter">
        <div className="page-splitter-left">
          <h1>Payment Solution Hub</h1>

          <article>
            <p>
              För att slippa att lägga tid på att betalningsmarkera dina fakturor
              finns nu en ny modul, skapad för att erat företag ska få mer tid till
              det ni vill.
            </p>

            <p>
              Känner ni att detta är en modul för er, beställ tjänsten här:
            </p>

            <button>Beställ modul</button>
          </article>

        </div>
        <div className="page-splitter-right">
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default Login;
