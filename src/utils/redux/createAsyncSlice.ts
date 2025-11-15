interface AsyncState {
  isLoading: boolean;
  error: string | null;
}

export const createAsyncSlice = <T extends AsyncState>() => {
  const handlePending = (state: T) => {
    state.isLoading = true;
    state.error = null;
  };

  const handleRejected = (state: T, action: any) => {
    state.isLoading = false;
    state.error = typeof action.payload === 'string' 
      ? action.payload 
      : action.payload?.message ?? 'An error occurred';
  };

  const handleFulfilled = (state: T) => {
    state.isLoading = false;
    state.error = null;
  };

  return {
    handlePending,
    handleRejected,
    handleFulfilled,
  };
};
