//
//  ViewController.m
//  ReactNativeTest
//
//  Created by myios on 2016/12/27.
//  Copyright © 2016年 ZHZ. All rights reserved.
//

#import "ViewController.h"
#import "RNViewController.h"
@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    
    UIImage *image = [UIImage imageNamed:@"2.jpg"];
    NSData *data = UIImageJPEGRepresentation(image, 0.5);
    
    long length = [data length]/1024;
    NSLog(@"image 的大小%ld",length);
    
    int  perMBBytes = 1024;
    
    CGImageRef cgimage = image.CGImage;
    size_t bpp = CGImageGetBitsPerPixel(cgimage);
    size_t bpc = CGImageGetBitsPerComponent(cgimage);
    size_t bytes_per_pixel = bpp / bpc;
    
    long lPixelsPerMB  = perMBBytes/bytes_per_pixel;
    
    long totalPixel = CGImageGetWidth(image.CGImage)*CGImageGetHeight(image.CGImage);
    
    
    long totalFileMB = totalPixel/lPixelsPerMB;
    NSLog(@"%ld",totalFileMB);
}
- (IBAction)pushRNVC:(id)sender {
    RNViewController *rnVC = [RNViewController new];
    [self.navigationController pushViewController:rnVC animated:YES];
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end
