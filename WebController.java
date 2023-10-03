import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

@GetMapping("/parseWebPage")
public String parseWebPage() {
        try {
        String url = "https://example.com"; // Replace with the URL you want to parse
        Document doc = Jsoup.connect(url).get();
        Elements links = doc.select("a[href]");

        for (Element link : links) {
        System.out.println("Link: " + link.attr("href"));
        }

        return "Web page parsed successfully!";
        } catch (IOException e) {
        e.printStackTrace();
        return "Error parsing web page.";
        }
        }
