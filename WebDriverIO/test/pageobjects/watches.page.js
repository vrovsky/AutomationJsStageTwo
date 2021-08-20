import Page from './page';
class WatchesPage extends Page {
  get promoBanner() {
    return $('.Lech_Cov19_G.Title');
  }
  get promoBannerAncher() {
    return $('.Lech_Cov19_G.Title');
  }
  open() {
    super.open('https://bsmu.by');
  }
}

export default new WatchesPage();
