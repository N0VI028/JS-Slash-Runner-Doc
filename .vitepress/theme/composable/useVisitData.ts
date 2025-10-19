export function useVisitData() {
  const script = document.createElement('script');
  script.defer = true;
  script.async = true;
  script.src = 'https://events.vercount.one/js';

  document.head.appendChild(script);
}
