// chat gpt generated lol i dont understand this AT ALL

if (document.startViewTransition) {
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", (event) => {
        if (
          link.target === "_blank" || // Skip links opening in new tab
          link.href.includes("#") || // Skip anchor links
          link.href === window.location.href // Skip same-page links
        ) return;

        event.preventDefault(); // Stop instant page load
        const url = link.href;

        document.startViewTransition(() => {
          setTimeout(() => {
            window.location.href = url; // Delay navigation slightly to ensure transition
          }, 25); // Adjust delay if needed
        });
      });
    });
  });

  // 🔹 BONUS: Fix for back/forward navigation
  window.addEventListener("popstate", () => {
    document.startViewTransition(() => {});
  });
}
