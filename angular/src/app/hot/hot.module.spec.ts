import { HotModule } from './hot.module';

describe('HotModule', () => {
  let hotModule: HotModule;

  beforeEach(() => {
    hotModule = new HotModule();
  });

  it('should create an instance', () => {
    expect(hotModule).toBeTruthy();
  });
});
