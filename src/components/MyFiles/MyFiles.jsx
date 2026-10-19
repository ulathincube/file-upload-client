import styles from "./MyFiles.module.css";
import { useState } from "react";
import HomeBar from "../HomeBar";
import FilesGrid from "../FilesGrid";
import GridFile from "../GridFile";
import GridFolder from "../GridFolder";
import BigContextMenu from "../BigContextMenu";

function MyFiles() {
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [showBigContext, setShowBigContext] = useState(false);

  const onShowContextMenu = () => {
    setShowContextMenu(true);
  };

  const onHideContextMenu = () => {
    setShowContextMenu(false);
  };

  const onShowBigContextMenu = () => {
    setShowBigContext(true);
  };

  const onHideBigContextMenu = () => {
    setShowBigContext(false);
  };

  return (
    <>
      <main className={styles.wrapper}>
        <aside className={styles.left}>
          <div className={styles.group}>
            <div className={styles.box}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.icon}
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h3 className={styles.description}>Profile</h3>
          </div>
          <div className={styles.group}>
            <div className={styles.box}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.icon}
              >
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
              </svg>
            </div>
            <h3 className={styles.description}>My Files</h3>
          </div>
          <div className={styles.group}>
            <div className={styles.box}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.icon}
              >
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
              </svg>
            </div>
            <h3 className={styles.description}>Shared</h3>
          </div>
          <button onClick={onShowBigContextMenu} className={styles.group}>
            <div className={styles.box}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.icon}
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
            <h3 className={styles.description}>New</h3>
          </button>
          {showBigContext && (
            <BigContextMenu onHideContextMenu={onHideBigContextMenu} />
          )}
        </aside>
        <header className={styles.header}>
          <h2 className={styles.title}>My Files</h2>
        </header>
        {/* <main className={styles.main}>
          <div className={styles.container}>
            <button onClick={onShowContextMenu} className={styles.action}>
              <span className={styles.parent}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={styles.icon}
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </span>
              <span className={styles.add}>Add</span>
            </button>
            {showContextMenu && (
              <article className={styles.context}>
                <button onClick={onHideContextMenu} className={styles.pick}>
                  <span className={styles.box}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={styles.icon}
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </span>
                  <span className={styles.text}>New Folder</span>
                </button>
                <button onClick={onHideContextMenu} className={styles.pick}>
                  <span className={styles.box}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={styles.icon}
                    >
                      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                      <polyline points="13 2 13 9 20 9"></polyline>
                    </svg>
                  </span>
                  <span className={styles.text}>File Upload</span>
                </button>
                <button onClick={onHideContextMenu} className={styles.pick}>
                  <span className={styles.box}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={styles.icon}
                    >
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </span>
                  <span className={styles.text}>Folder Upload</span>
                </button>
              </article>
            )}
          </div>
          <article className={styles.display}>
            <h3 className={styles.summary}>My Files</h3>
            <section className={styles.files}>
              <article className={styles.parts}>
                <div className={styles.box}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={styles.big}
                  >
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                    <polyline points="13 2 13 9 20 9"></polyline>
                  </svg>
                </div>
                <p className={styles.bold}>It's Empty</p>
                <p className={styles.text}>
                  Drag and drop your files into this area or click add
                </p>
              </article>
            </section>
          </article>
        </main> */}

        <FilesGrid>
          <GridFile text="Medicals" />
          <GridFile text="Sponsorships" />
          <GridFolder text="Games" />
        </FilesGrid>

        <aside className={styles.right}>
          <div className={styles.box}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.icon}
            >
              <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
            </svg>
          </div>
          <article className={styles.details}>
            <h3 className={styles.heading}>My Files</h3>
            <dl className={styles.list}>
              <div className={styles.item}>
                <dt className={styles.tag}>Type</dt>
                <dd className={styles.description}>Cloud Storage</dd>
              </div>
              <div className={styles.item}>
                <dt className={styles.tag}>Size</dt>
                <dd className={styles.description}>0 MB / 3.0 GB</dd>
              </div>
            </dl>
          </article>
        </aside>
      </main>
      <HomeBar />
    </>
  );
}

export default MyFiles;
