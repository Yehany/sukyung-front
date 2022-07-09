import React, { useCallback } from 'react';
import Input from '../components/common/Input';
import Image from '../components/common/Image';
import Button from '../components/common/Button';
import { useAppDispatch, useAppSelector } from '../store';
import { setValue } from '../store/store';

const Home: React.FunctionComponent = () => {
  const value = useAppSelector((state) => state.stateStore.value);
  const dispatch = useAppDispatch();
  const increase = () => {
    dispatch(setValue(value + 1));
  };
  return (
    <div>
      <div className="aaa">hello</div>
      <Input type="text" defaultValue="hello" />
      <Button text="안녕" onClick={increase} />
      {value}
    </div>
  );
};

export default Home;
