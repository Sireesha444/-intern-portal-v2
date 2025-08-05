import { render, screen } from '@testing-library/react';
import StudentLogin from '../StudentLogin';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

describe('StudentLogin Page', () => {
  it('renders login form inputs and button', () => {
    render(
      <GoogleOAuthProvider clientId="test-client-id">
        <BrowserRouter>
          <StudentLogin />
        </BrowserRouter>
      </GoogleOAuthProvider>
    );

    expect(screen.getByLabelText(/Student ID/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Login with Credentials/i })).toBeInTheDocument();
  });
});
