import React from "react";

export interface GalleryProps {
  urls: string[];
}

interface GalleryState {
  currentIndex: number;
}

export class Gallery extends React.Component<GalleryProps, GalleryState> {
  public constructor(props: GalleryProps) {
    super(props);
    this.state = {
      currentIndex: 0
    };
  }
  private _previous() {
    const firstIndex = 0;
    const lastIndex = this.props.urls.length - 1;
    const currentIndex = this.state.currentIndex;
    const nextIndex =
      currentIndex === firstIndex ? lastIndex : currentIndex - 1;
    this.setState({
      currentIndex: nextIndex
    });
  }
  private _next() {
    const firstIndex = 0;
    const lastIndex = this.props.urls.length - 1;
    const currentIndex = this.state.currentIndex;
    const nextIndex =
      currentIndex === lastIndex ? firstIndex : currentIndex + 1;
    this.setState({
      currentIndex: nextIndex
    });
  }
  public render() {
    const url = this.props.urls[this.state.currentIndex];
    return (
      <div>
        <table className="gallery">
          <tbody>
            <tr>
              <td className="galleryLeft">
                <div className="clickcable" onClick={() => this._previous()}>
                  ◀
                </div>
              </td>
              <td className="galleryImg">
                <img src={url} />
              </td>
              <td className="galleryRight" onClick={() => this._next()}>
                <div className="clickcable">▶</div>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3} className="galleryFooter">
                {this.state.currentIndex + 1} / {this.props.urls.length}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
