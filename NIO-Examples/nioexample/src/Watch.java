/**
 * Created by kalyani on 9/22/15.
 */
import java.io.IOException;

import java.nio.file.FileSystems;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.WatchEvent;
import java.nio.file.WatchKey;
import java.nio.file.WatchService;

import static java.nio.file.StandardWatchEventKinds.*;

public class Watch {
    public static void main(String[] args) throws IOException
    {
        if (args.length != 1)
        {
            System.err.println("usage: java WatcherDemo directory");
            return;
        }
        WatchService watcher = FileSystems.getDefault().newWatchService();
        Path dir = Paths.get(args[0]);
        dir.register(watcher, ENTRY_CREATE, ENTRY_DELETE, ENTRY_MODIFY);
        for (;;)
        {
            WatchKey key;
            try
            {
                key = watcher.take();
            }
            catch (InterruptedException ie)
            {
                return;
            }

            for (WatchEvent<?> event: key.pollEvents())
            {
                WatchEvent.Kind<?> kind = event.kind();
                if (kind == OVERFLOW)
                {
                    System.out.println("overflow");
                    continue;
                }
                @SuppressWarnings("unchecked")
                WatchEvent ev = (WatchEvent) event;
                Path filename = (Path) ev.context();
                System.out.printf("%s: %s%n", ev.kind(), filename);
            }

            boolean valid = key.reset();
            if (!valid)
                break;
        }
    }
}