import { DeliveryAreasREST } from '../DeliveryAreasREST';

describe('DeliveryAreasREST', () => {
  it('getAll should retrieve all the delivery areas', async () => {
    const service = new DeliveryAreasREST('http://localhost:8090');
    const deliveryAreas = await service.allDeliveryAreas();
    expect(deliveryAreas.length).toEqual(30);
  });
});
