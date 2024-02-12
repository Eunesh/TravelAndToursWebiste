import { FC } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

interface IWysiwygContainer {
  data: string;
  setData: (value: string) => void;
}
const WysiwygContainer: FC<IWysiwygContainer> = ({ data, setData }) => {
  return (
    <CKEditor
      editor={ClassicEditor}
      data={data}
      onChange={(_, editor) => {
        const data = editor.getData();
        setData(data);
      }}
    />
  );
};

export default WysiwygContainer;
