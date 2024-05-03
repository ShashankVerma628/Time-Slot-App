import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styles from "./link.module.css";
import Share from "../../assets/Share";
import useToast from "../../hooks/useToast";

const ShareLink = () => {
  const toast = useToast();
  return (
    <CopyToClipboard text={"Content copied test"}>
      <p
        onClick={() => toast("Copied to clipboard!")}
        href="/"
        target="_blank"
        className={styles.copy_btn}
      >
        <Share /> Share Link
      </p>
    </CopyToClipboard>
  );
};

export default ShareLink;
