package api.exceptions;

public class BadValueParameterException extends Exception{

    public BadValueParameterException(Throwable cause) {
        super(cause);
    }

    public BadValueParameterException(String message) {
        super(message);
    }

    public BadValueParameterException(String message, Throwable cause) {
        super(message, cause);
    }
}
