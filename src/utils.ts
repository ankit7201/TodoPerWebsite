type ParseResult = {
  success: boolean;
  domain: string;
  error?: string;
};

const extractDomain = (url: string): ParseResult => {
  try {
    if (!url) {
      return {
        success: false,
        domain: "",
        error: "URL cannot be empty",
      };
    }

    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = "https://" + url;
    }

    const urlObject = new URL(url);

    // Get hostname and remove 'www.' if present
    let domain = urlObject.hostname;
    domain = domain.replace(/^www\./, "");

    return {
      success: true,
      domain,
    };
  } catch (error) {
    return {
      success: false,
      domain: "",
      error: `Invalid URL: ${error instanceof Error ? error.message : "Unknown error"}`,
    };
  }
};

export { extractDomain, type ParseResult };
