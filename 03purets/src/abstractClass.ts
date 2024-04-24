abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;
  getReelTime(): number {
    // some complex computation
    return 8;
  }
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("Sepia");
  }
}

const ism = new Instagram("test", "test", 3);

ism.getReelTime();
