import { useRecoilState, useRecoilValue } from "recoil";
import { textLength, textState } from "./recoil";
import { DefaultButton } from "@fluentui/react/lib/Button";

interface PList{
    fuser: any[];
}

export const List: React.FunctionComponent<PList>  = (props) => {
    const [text, setText] = useRecoilState(textState);
    const textLenght = useRecoilValue(textLength);

    const onClickSetRecoil = (text: any[]) => {
        const list = props.fuser;
        setText(list.find(element => element.key).key)
    }

    return (<> <DefaultButton text="추가" onClick={() => onClickSetRecoil(props.fuser)}></DefaultButton>{text}
    <br></br>{textLenght}</>)
}