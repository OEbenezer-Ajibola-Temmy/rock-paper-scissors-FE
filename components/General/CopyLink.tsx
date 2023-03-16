import Image from 'next/image';
import { useState } from 'react';
import ic_copy from '../../public/svgs/ic-copy.svg';

interface CopyLinkButtonProps {
  link: string;
}

const CopyLinkButton = ({ link }: CopyLinkButtonProps) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link);
    setCopySuccess(true);
  };

  return (
    <>
      <button type="button" onClick={copyToClipboard}>
        <Image src={ic_copy} alt="link" />
        {copySuccess ? 'Copied!' : 'Copy link'}
      </button>
    </>
  );
};

export default CopyLinkButton;
