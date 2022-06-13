export class DeliveryAreasREST {
  constructor(host = 'http://localhost:8090') {
    this.host = host;
  }

  async allDeliveryAreas() {
    const url = `${this.host}/v2/api/rest/getDeliveryAreas`;
    const response = await fetch(url, { method: 'POST' });
    if (response.status === 201) {
      return response.json();
    }
  }
}
