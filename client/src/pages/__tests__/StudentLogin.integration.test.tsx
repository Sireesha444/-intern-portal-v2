import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import StudentLogin from '../StudentLogin';
import axios from 'axios';
import { vi } from 'vitest';

// Mock axios
vi.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('StudentLogin Integration', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  it('logs in with valid credentials and redirects to dashboard', async () => {
    mockedAxios.post.mockResolvedValueOnce({
      data: { studentId: 'S12345' },
    });

    render(
      <GoogleOAuthProvider clientId="test-client-id">
        <BrowserRouter>
          <StudentLogin />
        </BrowserRouter>
      </GoogleOAuthProvider>
    );

    // Select inputs more reliably
    const inputs = screen.getAllByRole('textbox');
    const studentIdInput = inputs[0]; // first textbox is Student ID
    const passwordInput = screen.getByLabelText('Password *');

    // Fill in credentials
    await userEvent.type(studentIdInput, 'S12345');
    await userEvent.type(passwordInput, 'password123');

    // Click login
    const loginButton = screen.getByRole('button', {
      name: /login with credentials/i,
    });
    await userEvent.click(loginButton);

    // Check that axios.post was called correctly
    await waitFor(() => {
      expect(mockedAxios.post).toHaveBeenCalledWith(
        'http://localhost:5000/api/students/login',
        { studentId: 'S12345', password: 'password123' }
      );
    });

    // Check that localStorage was set
    expect(localStorage.getItem('student_token')).toBe('custom_token_placeholder');
  });
});
