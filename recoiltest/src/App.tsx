import React, { FormEvent, useMemo, useState } from 'react';
import { Stack, DefaultButton, TextField, Text } from '@fluentui/react';
import './App.css';
import { textState } from './recoil';

import { List } from './List';

export const App: React.FunctionComponent = () => {
   const [nameValue, setNameValue] = useState<string>();
   const [mailValue, setMailValue] = useState<string>();

   const onClickSetState = (name?: string, mail?: string) => {
      const httpAddress = 'http://localhost:8080/api/v1/get-api/value';
      fetch("api/v1/get-api/value")
      .then((response)=>{
         console.log(response);
        return response.json();
      })
      .then((data)=>{
         console.log(data);
      });
   };

   return (
      <Stack horizontalAlign="start" verticalAlign="start">
         <Stack horizontal verticalAlign="center">
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
            <DefaultButton text="로그인" onClick={() => onClickSetState(nameValue, mailValue)}></DefaultButton>
         </Stack>
      </Stack>
   );
};
