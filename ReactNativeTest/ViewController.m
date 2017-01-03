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
