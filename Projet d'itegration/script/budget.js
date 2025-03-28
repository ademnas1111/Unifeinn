function showSection(sectionId) {
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.remove("active");
  });

  document.getElementById(sectionId).classList.add("active");

  document.querySelectorAll("nav ul li").forEach((li) => {
    li.classList.remove("active");
  });
  event.currentTarget.classList.add("active");

  const activeLi = event.currentTarget;
  activeLi.querySelector("svg path").setAttribute("fill", "white");

  document
    .querySelectorAll("nav ul li:not(.active) svg path")
    .forEach((path) => {
      const defaultColors = {
        dashboard: "#a6a6a6",
        transactions: "#949494",
        "card-center": "#b8b7b7",
      };
      const parentId = path
        .closest("li")
        .getAttribute("onclick")
        .match(/'(.*?)'/)[1];
      path.setAttribute("fill", defaultColors[parentId]);
    });
}
document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("balanceChart");

  if (!ctx) return;
  if (typeof Chart === "undefined") return;

  new Chart(ctx.getContext("2d"), {
    type: "line",
    data: {
      labels: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
      datasets: [
        {
          label: "Income",
          data: [15000, 22000, 18000, 28000, 25000, 35000, 45923],
          borderColor: "#07E092",
          backgroundColor: "rgba(76, 175, 80, 0.1)",
          borderWidth: 3,
          tension: 0.3,
          fill: true,
        },
        {
          label: "Expenses",
          data: [5000, 8000, 6000, 9000, 7000, 10000, 12345],
          borderColor: "#FD5B71",
          backgroundColor: "rgba(244, 67, 54, 0.1)",
          borderWidth: 3,
          tension: 0.3,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
          labels: {
            font: {
              family: "Poppins",
              size: 12,
            },
            padding: 20,
          },
        },
        tooltip: {
          mode: "index",
          intersect: false,
          callbacks: {
            label: function (context) {
              return `${
                context.dataset.label
              }: $${context.raw.toLocaleString()}`;
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            display: true,
            drawBorder: false,
            color: "rgba(0, 0, 0, 0.05)",
          },
          ticks: {
            callback: function (value) {
              return value >= 1000 ? `$${value / 1000}k` : `$${value}`;
            },
            font: {
              family: "Poppins",
            },
          },
        },
        x: {
          grid: {
            display: false,
          },
          ticks: {
            font: {
              family: "Poppins",
            },
          },
        },
      },
      elements: {
        point: {
          radius: 4,
          hoverRadius: 6,
        },
      },
    },
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("gaugeCanvas");
  const ctx = canvas.getContext("2d");
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 80;
  const value = 0.72;

  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0.75 * Math.PI, 2.25 * Math.PI);
  ctx.strokeStyle = "#f0f0f0";
  ctx.lineWidth = 15;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(
    centerX,
    centerY,
    radius,
    0.75 * Math.PI,
    (0.75 + 1.5 * value) * Math.PI
  );
  ctx.strokeStyle = "#0077B6";
  ctx.lineWidth = 15;
  ctx.lineCap = "round";
  ctx.stroke();
});
