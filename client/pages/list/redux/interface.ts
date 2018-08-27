interface UserState {
  name: string;
}

interface UserPropsType  {
  user: UserState;
  onViewInit: () => () => void;
  vali?: boolean;
}

export {
  UserState,
  UserPropsType,
};
