export async function getFestivalData () {
  const artistResponse = fetch ('./artists.json');

  const performanceResponse = fetch ('./performances.json');

  const response = await Promise.all ([artistResponse, performanceResponse]);
  const [artistResult, performanceResult] = response;

  if (!artistResult.ok || !performanceResult.ok) {
    throw new Error ('Festival data could not be loaded.');
  }

  const artists = await artistResult.json ();

  const performances = await performanceResult.json ();

  return {
    artists: artists,
    performances: performances,
  };
}
