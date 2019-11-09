import { InvestorModule } from './investor.module';

describe('InvestorModule', () => {
    let investorModule: InvestorModule;
  
    beforeEach(() => {
        investorModule = new InvestorModule();
    });
  
    it('should create an instance', () => {
      expect(investorModule).toBeTruthy();
    });
  });