import {
  getDeputies,
  getDeputiesInOffice,
  getDeputy,
  getPoliticalGroups
} from "./index";

it("Call getDeputies()", async () => {
  return getDeputies().then(ds => {
    expect(ds.length).toBeGreaterThan(0);
    ds.forEach(d => {
      expect(d.image15).toBeDefined();
      expect(d.image30).toBeDefined();
      expect(d.image60).toBeDefined();
      expect(d.image120).toBeDefined();
      expect(d.imageDynamic(50)).toBeDefined();
      expect(d.nbMandatsTotaux).toBeDefined();
    });
  });
});

it("Call getDeputiesInOffice()", async () => {
  return getDeputiesInOffice().then(ds => {
    expect(ds.length).toBeGreaterThan(0);
    ds.forEach(d => {
      expect(d.image15).toBeDefined();
      expect(d.image30).toBeDefined();
      expect(d.image60).toBeDefined();
      expect(d.image120).toBeDefined();
      expect(d.imageDynamic(50)).toBeDefined();
      expect(d.nbMandatsTotaux).toBeDefined();
    });
  });
});

it("Call getDeputy('patricia-lemoine')", async () => {
  return getDeputy("patricia-lemoine").then(d => {
    expect(d).toBeDefined();
    expect(d.image15).toBeDefined();
    expect(d.image30).toBeDefined();
    expect(d.image60).toBeDefined();
    expect(d.image120).toBeDefined();
    expect(d.imageDynamic(50)).toBeDefined();
    expect(d.nbMandatsTotaux).toBeDefined();
  });
});

it("Call getPoliticalGroups()", async () => {
  return getPoliticalGroups().then(d => {
    expect(d).toBeDefined();
  });
});
