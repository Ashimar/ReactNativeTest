//
//  RNViewController.m
//  ReactNativeTest
//
//  Created by myios on 2016/12/27.
//  Copyright © 2016年 ZHZ. All rights reserved.
//

#import "RNViewController.h"

#import "RCTRootView.h"

@interface RNViewController ()

@property (nonatomic, strong) UIButton *popButton;

@end

@implementation RNViewController
- (void)viewDidDisappear:(BOOL)animated {
    [super viewDidDisappear:animated];
    
    [self.navigationController.navigationBar setHidden:NO];
}

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    [self.navigationController.navigationBar setHidden:YES];
    
//    NSURL *jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];     // 打包
    
    NSString * strUrl = @"http://localhost:8081/index.ios.bundle?platform=ios&dev=true";    // 模拟器
//    NSString * strUrl = @"http://192.168.0.121:8081/index.ios.bundle?platform=ios&dev=true";    // 真机调试
    NSURL * jsCodeLocation = [NSURL URLWithString:strUrl];
    RCTRootView *rootView =
    [[RCTRootView alloc] initWithBundleURL : jsCodeLocation
                         moduleName        : @"ReactNativeTest"
                         initialProperties :
     @{
       @"scores" : @[
               @{
                   @"name" : @"Alex",
                   @"value": @"42"
                   },
               @{
                   @"name" : @"Joel",
                   @"value": @"10"
                   }
               ]
       }
                          launchOptions    : nil];
    self.view = rootView;
    
//    [rootView addSubview:self.popButton];
}

- (void)popAction: (UIButton *)sender {
    [self.navigationController popViewControllerAnimated:YES];
}

- (UIButton *)popButton {
    if (!_popButton) {
        _popButton = [UIButton buttonWithType:UIButtonTypeCustom];
        
        _popButton.frame = CGRectMake(50, 20, 44, 39);
        
        [_popButton setTitle:@"返回" forState:0];
        
        [_popButton setTitleColor:[UIColor blackColor] forState:0];
        
        [_popButton addTarget:self action:@selector(popAction:) forControlEvents:UIControlEventTouchUpInside];
    }
    return _popButton;
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
