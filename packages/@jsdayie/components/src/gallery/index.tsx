import React, { useState } from "react";
import Image from "next/image";

export interface GalleryProps {
  urls: string[];
}

export const Gallery: React.FC<GalleryProps> = (props) => {
  const { urls } = props;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const url = urls[currentIndex];

  const previous = () => {
    const firstIndex = 0;
    const lastIndex = urls.length - 1;
    const nextIndex =
      currentIndex === firstIndex ? lastIndex : currentIndex - 1;
    setCurrentIndex(nextIndex);
  };

  const next = () => {
    const firstIndex = 0;
    const lastIndex = urls.length - 1;
    const nextIndex =
      currentIndex === lastIndex ? firstIndex : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  return (
    <div>
      <table className="gallery">
        <tbody>
          <tr>
            <td className="galleryLeft">
              <div
                role="button"
                className="clickcable"
                onClick={() => previous()}
                onKeyDown={() => previous()}
                tabIndex={0}
              >
                ◀
              </div>
            </td>
            <td className="galleryImg">
              <Image src={url} alt="JSDayIE event" width="947" height="710" />
            </td>
            <td className="galleryRight">
              <div
                role="button"
                className="clickcable"
                onClick={() => next()}
                onKeyDown={() => next()}
                tabIndex={0}
              >
                ▶
              </div>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3} className="galleryFooter">
              {currentIndex + 1} / {urls.length}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};