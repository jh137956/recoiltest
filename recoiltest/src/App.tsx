import React, { FormEvent, useMemo, useState } from 'react';
import { Stack, DefaultButton, TextField, Text } from '@fluentui/react';
import './App.css';
import { textState } from './recoil';

import { List } from './List';

export const App: React.FunctionComponent = () => {
   const [nameValue, setNameValue] = useState<string>();
   const [mailValue, setMailValue] = useState<string>();
   const [users, setUsers] = useState<any[]>([]);
   const [fuser, setfuser] = useState<any[]>([]);


   const onClickSetState = (name?: string, mail?: string) => {
      let listColumns2 = [];
      listColumns2.push({ key: name!, name: mail! });
      setfuser(listColumns2);
     
 
      let listColumns = [];
      listColumns = users;
      listColumns.push({ key: name!, name: mail! });
      setUsers(listColumns);
   };

   const onClickSetState2 = (name?: string, mail?: string) => {
      const key = users.find((element) => element.key).key;
      const filtered = users.filter((element) => element.key !== key);
      setUsers(filtered);
   };

   const onClickSetReducer = (name?: string, mail?: string) => {
     
   };

   const onClickSetReducer2 = (name?: string, mail?: string) => {
     
   };

   return (
      <Stack horizontalAlign="start" verticalAlign="start">
         <Stack horizontal>
  
            <TextField
               placeholder="계정명"
               onChange={(event?: FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string | undefined) =>
                  setNameValue(newValue)
               }
            />
            <TextField
               placeholder="메일명"
               onChange={(event?: FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string | undefined) =>
                  setMailValue(newValue)
               }
            />
            <DefaultButton text="추가" onClick={() => onClickSetState(nameValue, mailValue)}></DefaultButton>
            <DefaultButton text="삭제" onClick={() => onClickSetState2(nameValue, mailValue)}></DefaultButton>
            <DefaultButton text="한국말로 변경" onClick={() => onClickSetReducer()}></DefaultButton>
            <DefaultButton text="영어로 변경" onClick={() => onClickSetReducer2()}></DefaultButton>
         </Stack>
         <Stack.Item><List fuser={fuser}/></Stack.Item>
      </Stack>
   );
};
