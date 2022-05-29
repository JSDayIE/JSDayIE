import React, { useState } from "react";

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
              <button
                type="button"
                className="clickcable"
                onClick={() => previous()}
              >
                ◀
              </button>
            </td>
            <td className="galleryImg">
              <img src={url} alt="JSDayIE event" />
            </td>
            <td className="galleryRight">
              <button
                type="button"
                className="clickcable"
                onClick={() => next()}
              >
                ▶
              </button>
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
