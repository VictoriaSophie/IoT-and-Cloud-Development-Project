#include <linux/module.h>
#include <linux/gpio.h>

MODULE_LICENSE("GPL");
MODULE_AUTHOR("VW");
MODULE_DESCRIPTION("LKM LED");
MODULE_VERSION("0.2");

static unsigned int gpioRed = 0;
static unsigned int gpioGreen = 14;
static unsigned int gpioWhite = 24;
static bool redOn =0;
static bool greenOn = 0;
static bool whiteOn = 0;

static int __init lkm01_init(void){
        int result = 0;

        if (!gpio_is_valid(gpioRed)){
        printk(KERN_INFO "GPIO_TEST: invalid LED GPIO\n");
        return -ENODEV;
        }

        redOn = true;
        greenOn= true;
        whiteOn= true;

        printk(KERN_INFO "Turning LEDs on");
        gpio_request(gpioRed, "sysfs");
        gpio_request(gpioGreen, "sysfs");
        gpio_request(gpioWhite, "sysfs");
        
        gpio_direction_output(gpioRed, redOn);
        gpio_direction_output(gpioGreen, greenOn);
        gpio_direction_output(gpioWhite, whiteOn);

        return result;
}

static void __exit lkm01_exit(void){
        printk(KERN_INFO "Turning LEDs off");
        gpio_set_value(gpioRed, 0);
        gpio_set_value(gpioGreen, 0);
        gpio_set_value(gpioWhite, 0);
}

module_init(lkm01_init);
module_exit(lkm01_exit);