#!/usr/bin/env node

/**
 * Configuration validation script
 * Prevents breaking changes to core config files
 */

const fs = require("fs");
const path = require("path");

const EXPECTED_CONFIGS = {
  "package.json": {
    dependencies: {
      next: "14.2.3",
      react: "18.2.0",
      "react-dom": "18.2.0",
      tailwindcss: "3.4.1",
    },
  },
  "next.config.js": {
    shouldNotContain: ["withMDX", "@next/mdx", "pageExtensions"],
  },
  "tailwind.config.js": {
    shouldContain: [
      "./src/app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
  },
};

function validatePackageJson() {
  const packagePath = path.join(process.cwd(), "package.json");
  const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8"));

  const expected = EXPECTED_CONFIGS["package.json"].dependencies;
  const actual = {
    ...packageJson.dependencies,
    ...packageJson.devDependencies,
  };

  for (const [dep, expectedVersion] of Object.entries(expected)) {
    if (!actual[dep]) {
      console.error(`❌ Missing dependency: ${dep}`);
      process.exit(1);
    }

    if (actual[dep] !== expectedVersion) {
      console.error(
        `❌ Version mismatch for ${dep}: expected ${expectedVersion}, got ${actual[dep]}`
      );
      process.exit(1);
    }
  }

  console.log("✅ package.json dependencies validated");
}

function validateNextConfig() {
  const configPath = path.join(process.cwd(), "next.config.js");
  const configContent = fs.readFileSync(configPath, "utf8");

  const shouldNotContain = EXPECTED_CONFIGS["next.config.js"].shouldNotContain;

  for (const forbidden of shouldNotContain) {
    if (configContent.includes(forbidden)) {
      console.error(
        `❌ next.config.js contains forbidden content: ${forbidden}`
      );
      console.error(
        "This may cause MDX dependency issues. Please revert to stable config."
      );
      process.exit(1);
    }
  }

  console.log("✅ next.config.js validated");
}

function validateTailwindConfig() {
  const configPath = path.join(process.cwd(), "tailwind.config.js");
  const configContent = fs.readFileSync(configPath, "utf8");

  const shouldContain = EXPECTED_CONFIGS["tailwind.config.js"].shouldContain;

  for (const required of shouldContain) {
    if (!configContent.includes(required)) {
      console.error(
        `❌ tailwind.config.js missing required content: ${required}`
      );
      process.exit(1);
    }
  }

  console.log("✅ tailwind.config.js validated");
}

function main() {
  console.log("🔍 Validating project configuration...");

  try {
    validatePackageJson();
    validateNextConfig();
    validateTailwindConfig();

    console.log("✅ All configurations validated successfully!");
  } catch (error) {
    console.error("❌ Configuration validation failed:", error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  validatePackageJson,
  validateNextConfig,
  validateTailwindConfig,
};
