package test;

import static def.dom.Globals.console;
import static def.dom.Globals.document;
import static def.dom.Globals.localStorage;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

import def.dom.HTMLElement;
import def.dom.Globals;
import static jsweet.util.Lang.$strict;

public class TestFile {

	public static void assertEquals(Object o1, Object o2) {
		if ($strict(o1 == o2)) {
			throw new Error("invalid assertion: " + o1 + "!=" + o2);
		}
	}

	public static void assertTrue(boolean b) {
		if (!b) {
			throw new Error("invalid assertion");
		}
	}

	public static void assertFalse(boolean b) {
		if (b) {
			throw new Error("invalid assertion");
		}
	}

	public static void test() {
		try {
			testIO();
			// not available
			// testMath();
			HTMLElement result = document.getElementById("result");
			if (result != null) {
				result.innerHTML = "Success!";
			}
		} catch (Exception e) {
			console.error(e);
			HTMLElement result = document.getElementById("result");
			if (result != null) {
				result.innerHTML = "Failure: " + e.getMessage();
			}
		}
	}

	public static void testIO() throws IOException {
		console.info("testing io");
		localStorage.clear();
		ByteArrayInputStream s = new ByteArrayInputStream("abc".getBytes());
		assertEquals(Character.getNumericValue('a'), s.read());
		File dir = new File("/a/b/c");
		assertFalse(dir.exists());
		dir.mkdirs();
		assertTrue(dir.exists());
		File f = new File(dir, "test.txt");
		assertFalse(f.exists());
		f.createNewFile();
		assertTrue(f.exists());
		FileWriter fw = new FileWriter(f);
		fw.append("abc");
		fw.close();
		BufferedReader reader = new BufferedReader(new FileReader(f));
		String line = reader.readLine();
		reader.close();
		assertEquals("abc", line);
		console.info("end testing io");
	}

}
