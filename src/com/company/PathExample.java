package com.company;

import java.nio.file.Path;
import java.nio.file.Paths;

/**
 * Created by kalyani on 9/14/15.
 */
public class PathExample {

    public static void main(String[] args) {

//        Path path = Paths.get("file:///home/kalyani/Documents/LFC");

        String originalPath =
                "file:///home/kalyani/Documents/LFC/fileconnector.xml";

        Path path1 = Paths.get(originalPath);
        System.out.println("path1 = " + path1);

        Path path2 = path1.normalize();
        System.out.println("path2 = " + path2);

    }
}
