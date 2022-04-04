class DeviceDetector {
  constructor() {
    this.userAgent = null;
  }

  init(userAgent) {
    this.userAgent = userAgent;
  }

  isAndroid = () => Boolean(this.userAgent.match(/Android/i));

  isIos = () => Boolean(this.userAgent.match(/iPhone|iPad|iPod/i));

  isOpera = () => Boolean(this.userAgent.match(/Opera Mini/i));

  isWindows = () => Boolean(this.userAgent.match(/IEMobile/i));

  isSSR = () => Boolean(this.userAgent.match(/SSR/i));

  isMobile = () =>
    Boolean(
      this.isAndroid() || this.isIos() || this.isOpera() || this.isWindows(),
    );

  isDesktop = () => Boolean(!this.isMobile() && !this.isSSR());
}

export default new DeviceDetector();
